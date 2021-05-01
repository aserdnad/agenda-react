import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react";

export const EditContact = () => {
	const { store, actions } = useContext(Context);
	const inicial = {
		name: "",
		email: "",
		phone: "",
		address: ""
	};

	const [contacto, setContacto] = useState(inicial);

	useEffect(() => {
		if (store.contactoEditar) {
			const objeto = {
				name: store.contactoEditar.full_name,
				email: store.contactoEditar.email,
				phone: store.contactoEditar.phone,
				address: store.contactoEditar.address
			};
			setContacto(objeto);
		}
	}, [store.contactoEditar]);

	const manejarDatos = e => {
		setContacto({ ...contacto, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		actions.updateContact(contacto.name, contacto.email, contacto.phone, contacto.address, store.contactoEditar.id);
		setContacto(inicial);
	};

	const regresar = () => {
		actions.loadData();
		actions.limpiarEspecifico();
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="name"
							value={contacto.name}
							onChange={manejarDatos}
							required
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							name="email"
							value={contacto.email}
							onChange={manejarDatos}
							required
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							name="phone"
							value={contacto.phone}
							onChange={manejarDatos}
							required
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							name="address"
							value={contacto.address}
							onChange={manejarDatos}
							required
						/>
					</div>
					<button type="button" className="btn btn-primary form-control" onClick={handleSubmit}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/" onClick={regresar}>
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
