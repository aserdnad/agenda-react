import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { actions } = useContext(Context);
	const objeto = {
		name: "",
		email: "",
		phone: "",
		address: ""
	};

	const [contacto, setContacto] = useState(objeto);

	const manejarDatos = e => {
		setContacto({ ...contacto, [e.target.name]: e.target.value });
	};

	const handleSubmit = e => {
		actions.createContact(contacto.name, contacto.email, contacto.phone, contacto.address);
		setContacto(objeto);
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
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
					<Link className="mt-3 w-100 text-center" to="/" onClick={actions.loadData()}>
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
