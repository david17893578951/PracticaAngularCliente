export class Producto {
    pruProCodigo: number;
    pruProNombre: string;
    pruProCosto: number;
    pruDetalles: any;
    constructor() { }
    public static getValidators(){

        return {
            pruProNombre: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            },
            pruProCosto: {
                validators: {
                    notEmpty: {
                        message: 'El campo está vacío.'
                    }
                }
            } 
        }
    
    }
}