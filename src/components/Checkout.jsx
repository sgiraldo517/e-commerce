import { Link } from "react-router-dom"
import { useRef } from "react";

const Checkout = () => {
    const formRef = useRef()
    const handleSubmit = (e) =>{
        e.preventDefault()
        const infoForm = new FormData(formRef.current)
        const cliente = Object.fromEntries(infoForm)
        console.log(cliente);
        e.target.reset()
    }

    return (
        <div className="container my-5">
            <div className="row position-relative p-5 text-muted bg-body border border-dashed rounded-5">
                <form action="" ref={formRef} onSubmit={handleSubmit} >
                    <Link to={'/'}>
                        <button type="button" className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"/>
                    </Link>
                    <div className="mb-3">
                        <label htmlFor="input_nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="input_nombre" name="nombre"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="input_apellido" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="input_apellido" name="apellido"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="input_telefono" className="form-label">Telefono</label>
                        <input type="tel" className="form-control" id="input_telefono" name="telefono"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="input_email" className="form-label">Correo Electronico</label>
                        <input type="email" className="form-control" id="input_email" name="email"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="input_conf_email" className="form-label">Confirmar Correo Electronico</label>
                        <input type="email" className="form-control" id="input_conf_email" name="conf_email"/>
                    </div>
                    <button className="btn btn-danger px-5 mb-5" type="submit">
                        Finalizar Compra 
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Checkout;
