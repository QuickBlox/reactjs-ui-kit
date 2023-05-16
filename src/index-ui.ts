import './index.scss';
import MainButton, {
  TypeButton,
} from './Presentation/components/UI/Buttons/MainButton/MainButton';
import MyButton from './MyButton/MyButton';
import MyInput from './MyInput/MyInput';
import QuickBloxUIKitProvider, {
  qbDataContext,
} from './Presentation/components/providers/QuickBloxUIKitProvider/QuickBloxUIKitProvider';
import { LocalDataSource } from './Data/source/local/LocalDataSource';
import useQBConnection from './Presentation/components/providers/QuickBloxUIKitProvider/useQBConnection';
import useQbDataContext from './Presentation/components/providers/QuickBloxUIKitProvider/useQbDataContext';
import useEventMessagesRepository from './Presentation/components/providers/QuickBloxUIKitProvider/useEventMessagesRepository';
import { DialogsViewModel } from './Presentation/Views/Dialogs/DialogViewModel';
import useDialogsViewModelWithMockUseCase from './Presentation/Views/Dialogs/useDialogsViewModelWithMockUseCase';
import { SubscribeToDialogEventsUseCase } from './Domain/use_cases/SubscribeToDialogEventsUseCase';
import { Pagination } from './Domain/repository/Pagination';
import { DialogEventInfo } from './Domain/entity/DialogEventInfo';
import EventMessageType from './Domain/entity/EventMessageType';
import { NotificationTypes } from './Domain/entity/NotificationTypes';
import { stringifyError } from './utils/parse';
import DesktopLayoutForMockModels from './Presentation/components/layouts/Desktop/DesktopLayoutForMockModels';
import DialogsComponent from './Presentation/Views/Dialogs/Dialogs';
import MessagesView from './Presentation/components/UI/Dialogs/MessagesView/MessagesView';
import DialogInformation from './Presentation/components/UI/Dialogs/DialogInformation/DialogInformation';
import { DialogEntity } from './Domain/entity/DialogEntity';
import BaseViewModel from './Presentation/Views/Base/BaseViewModel';
import {
  LoginData,
  RemoteDataSource,
} from './Data/source/remote/RemoteDataSource';

export {
  MainButton,
  MyButton,
  MyInput,
  TypeButton,
  type LoginData,
  QuickBloxUIKitProvider,
  qbDataContext,
  RemoteDataSource,
  LocalDataSource,
  useQBConnection,
  useQbDataContext,
  useEventMessagesRepository,
  type DialogsViewModel,
  useDialogsViewModelWithMockUseCase,
  SubscribeToDialogEventsUseCase,
  Pagination,
  type DialogEventInfo,
  EventMessageType,
  NotificationTypes,
  stringifyError,
  DesktopLayoutForMockModels,
  DialogsComponent,
  MessagesView,
  DialogInformation,
  type DialogEntity,
  BaseViewModel,
};
