import { BaseUseCase } from './base/BaseUseCase';
import { DialogEntity } from '../entity/DialogEntity';
import DialogsRepository from '../../Data/repository/DialogsRepository';
import { CallBackFunction } from './base/IUseCase';

export class SubscribeToDialogsUpdatesUseCaseWithMock extends BaseUseCase<
  Array<DialogEntity>,
  Array<DialogEntity>
> {
  private dialogRepository: DialogsRepository;

  private callBackExecute: CallBackFunction<Array<DialogEntity>> | undefined;

  private dialogs: Array<DialogEntity> = [];

  // todo: delete synUseCase: BaseUseCase<boolean>, use only dialogRepository
  constructor(dialogRepository: DialogsRepository) {
    console.log('CONSTRUCTOR SubscribeToDialogsUpdatesUseCaseWithMock');
    super();
    this.callBackExecute = undefined;

    this.dialogRepository = dialogRepository;
  }

  execute(
    callBack: CallBackFunction<Array<DialogEntity>>,
  ): Promise<Array<DialogEntity>> {
    console.log('execute SubscribeToDialogsUpdatesUseCaseWithMock', callBack);
    this.callBackExecute = callBack;
    if (
      this.callBackExecute !== undefined &&
      typeof this.callBackExecute === 'function'
    ) {
      this.subscribe(this.callBackExecute);
    }
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    this.dialogRepository.subscribeLocalSync(async () => {
      console.log(
        '2.CALL EXECUTE CALLBACK in SubscribeToDialogsUpdatesUseCaseWithMock',
      );
      this.dialogs = await this.dialogRepository.getDialogsFromLocal();
      this.informSubscribers(this.dialogs);
    });

    return Promise.resolve(this.dialogRepository.getDialogsFromLocal());
  }

  // subscribe(callBack: CallBackFunction): void {
  //   console.log('execute subscribe');
  //   // this.subject.subscribe()
  //   // this.callBackExecute = callBack;
  //   //
  //   // // callBack(this.dialogs);
  //   // if (this.events.listeners('Execute').length === 0) {
  //   //   this.events.addListener('Execute', this.callBackExecute);
  //   // }
  //   // this.events.on('Execute', this.callBackExecute);
  //   // this.register('Execute', callBack);
  //   this.addSubscriber(callBack);
  // }
}
