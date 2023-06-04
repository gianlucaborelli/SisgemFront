import { ConfirmDialogComponent } from "../components/shared/confirm-dialog/confirm-dialog.component";
import { ConfirmDialogData } from "../interfaces/confirm-dialog-data";
import { ConfirmDialogService } from "../services/confirm-dialog.service";

const defaultConfirmData = {
    title: "Confirmação",
    message: "Tem certeza que deseja prosseguir?"
}

export function needConfirmation ( confirmData : ConfirmDialogData = defaultConfirmData) {

    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (...args: any) {
            ConfirmDialogService.getInstance()?.openDialog(confirmData,ConfirmDialogComponent).subscribe((validation) => {
                if (validation){
                    originalMethod.apply(this, args);
                }
              });
        };

        return descriptor;
    };
}