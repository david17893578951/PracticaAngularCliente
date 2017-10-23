export class Cabecera {
    pruFacCodigo: number;
    pruFacCliente: string;
    pruFacFecha: Date;
    pruFacTota: number;
    pruDetalles: any;
    constructor() { }
    public static getValidators() {
        return {
            pruFacCliente: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
            pruFacFecha: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
            pruFacTota: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    },
                    greaterThan: {
                        value: 0,
                        message: 'El número tiene que ser mayor o igual a cero.'
                    }
                }
            }
        }
    }
}