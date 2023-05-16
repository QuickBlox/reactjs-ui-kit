import React, { useEffect, useState } from 'react';
import useQbDataContext from '../../../providers/QuickBloxUIKitProvider/useQbDataContext';
import BaseViewModel from '../../../../Views/Base/BaseViewModel';
import { DialogEntity } from '../../../../../Domain/entity/DialogEntity';
import { DialogsViewModel } from '../../../../Views/Dialogs/DialogViewModel';
import DialogsComponent from '../../../../Views/Dialogs/Dialogs';
import DialogInformation from '../../../UI/Dialogs/DialogInformation/DialogInformation';
import DesktopLayoutForMockModels from '../../Desktop/DesktopLayoutForMockModels';
import MessagesView from '../../../UI/Dialogs/MessagesView/MessagesView';
import useDialogsViewModelWithMockUseCase from '../../../../Views/Dialogs/useDialogsViewModelWithMockUseCase';
import { Pagination } from '../../../../../Domain/repository/Pagination';
import { SubscribeToDialogEventsUseCase } from '../../../../../Domain/use_cases/SubscribeToDialogEventsUseCase';
import useEventMessagesRepository from '../../../providers/QuickBloxUIKitProvider/useEventMessagesRepository';
import EventMessageType from '../../../../../Domain/entity/EventMessageType';
import { NotificationTypes } from '../../../../../Domain/entity/NotificationTypes';
import { stringifyError } from '../../../../../utils/parse';
import { DialogEventInfo } from '../../../../../Domain/entity/DialogEventInfo';

function TestStageWithMockData() {
  console.log('create TestStageWithMockData');
  const [selectedDialog, setSelectedDialog] =
    React.useState<BaseViewModel<DialogEntity>>();

  const currentContext = useQbDataContext();
  const eventMessaging = useEventMessagesRepository();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { userName } =
    currentContext.storage.REMOTE_DATA_SOURCE.authInformation;
  const userId =
    currentContext.storage.REMOTE_DATA_SOURCE.authInformation?.userId;

  const dialogsViewModel: DialogsViewModel =
    useDialogsViewModelWithMockUseCase(currentContext);

  const subscribeToDialogEventsUseCase: SubscribeToDialogEventsUseCase =
    new SubscribeToDialogEventsUseCase(eventMessaging, 'TestStage');

  /* DATA needed to init MockData
  const remoteDataSourceMock: RemoteDataSource = currentContext.storage
    .REMOTE_DATA_SOURCE as RemoteDataSource;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const localDataSource: LocalDataSource =
    currentContext.storage.LOCAL_DATA_SOURCE;
  const { connectionRepository } = useQBConnection();
*/
  // инициализация СДК и загрузка тестовых данных, запуск пинга - может не быть
  // todo: добавить метод в контекст
  const isAuthProcessed = (): boolean => {
    console.log('call isAuthProcessed');
    const result =
      currentContext.storage.REMOTE_DATA_SOURCE.needInit === false &&
      currentContext.storage.REMOTE_DATA_SOURCE.authProcessed &&
      currentContext.storage.CONNECTION_REPOSITORY.needInit === false;

    console.log(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `initialValue.REMOTE_DATA_SOURCE.needInit: ${currentContext.storage.REMOTE_DATA_SOURCE.needInit}`,
    );
    console.log(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `initialValue.REMOTE_DATA_SOURCE.authProcessed: ${currentContext.storage.REMOTE_DATA_SOURCE.authProcessed}`,
    );

    console.log(
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      `initialValue.CONNECTION_REPOSITORY.needInit: ${currentContext.storage.CONNECTION_REPOSITORY.needInit}`,
    );

    return result;
  };

  useEffect(() => {
    console.log('TestStage: GET DATA ');
    console.log(
      `auth data: ${JSON.stringify(
        currentContext.InitParams.loginData,
      )} at ${new Date().toLocaleTimeString()}`,
    );
    if (isAuthProcessed()) {
      console.log('auth is completed, CAN GET DATA');
      const pagination: Pagination = new Pagination();

      dialogsViewModel?.getDialogs(pagination);
    }

    return () => {
      console.log('TestStage: USE EFFECT release');
      dialogsViewModel.release();
    };
  }, []); // сейчас это выполняется один раз при старте, а нужно каждый раз при смене пользователя

  const dialogsEventHandler = (dialogInfo: DialogEventInfo) => {
    console.log('call dialogsEventHandler in subscribeToDialogEventsUseCase');
    if (dialogInfo.eventMessageType === EventMessageType.SystemMessage) {
      switch (dialogInfo.notificationTypes) {
        case NotificationTypes.DELETE_LEAVE_DIALOG: {
          if (
            dialogInfo.messageInfo &&
            dialogInfo.messageInfo.sender_id === userId
          ) {
            setSelectedDialog(undefined);
          }

          break;
        }
        default: {
          const pagination: Pagination = new Pagination();

          dialogsViewModel?.getDialogs(pagination);
          break;
        }
      }
    }
  };

  useEffect(() => {
    console.log('TestStage: GET DATA AFTER User data has CHANGED');
    console.log(
      `auth is ${JSON.stringify(
        currentContext.InitParams.loginData,
      )} at ${new Date().toLocaleTimeString()}`,
    );

    if (isAuthProcessed()) {
      console.log('auth is completed, FETCH DATA');
      const pagination: Pagination = new Pagination();

      dialogsViewModel?.getDialogs(pagination);
      //
      console.log('auth is completed, subscribe');

      subscribeToDialogEventsUseCase
        .execute(dialogsEventHandler)
        .catch((reason) => {
          console.log(stringifyError(reason));
        });
      //
    }
  }, [currentContext.InitParams]);

  useEffect(() => {
    console.log(
      `TestStage: selectedDialog: ${
        selectedDialog?.entity?.name || 'Dialog Name is empty'
      }`,
    );
    if (selectedDialog) {
      dialogsViewModel.entity = selectedDialog.entity!;
    }
  }, [selectedDialog]);

  const [needDialogInformation, setNeedDialogInformation] = useState(true);
  const informationCloseHandler = (): void => {
    setNeedDialogInformation(false);
  };
  const informationOpenHandler = (): void => {
    setNeedDialogInformation(true);
  };

  return (
    <DesktopLayoutForMockModels
      dialogsView={
        <DialogsComponent
          dialogsViewModel={dialogsViewModel} // 1 Get 2 Update UseCase
          itemSelectHandler={setSelectedDialog}
          additionalSettings={{ withoutHeader: false }}
        />
      }
      dialogMessagesView={
        selectedDialog && selectedDialog.entity ? (
          <MessagesView
            dialog={selectedDialog?.entity}
            InformationHandler={informationOpenHandler}
            maxWidthToResize={
              selectedDialog && needDialogInformation ? undefined : '1040px'
            }
          /> // 1 Get Messages + 1 Get User by Id
        ) : (
          <div
            style={{
              minHeight: '799px',
              minWidth: '1040px',
              border: '1px solid var(--divider)',
              margin: '0 auto',
            }}
          >
            You login as {userName}({userId}). Select chat to start
            conversation.
          </div>
        )
      }
      dialogInfoView={
        // 1 Get User by 1 + Get user by name
        <div>
          {selectedDialog && needDialogInformation && (
            <DialogInformation
              dialog={selectedDialog.entity}
              dialogViewModel={dialogsViewModel}
              closeInformationHandler={informationCloseHandler}
            />
          )}
        </div>
      }
    />
  );
}

export default TestStageWithMockData;
