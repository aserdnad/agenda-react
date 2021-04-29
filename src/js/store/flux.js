const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
		},
		actions: {
			loadData: () => {
				const conseguirAgenda = async () => {
					try {
						const respuesta = await fetch("https://assets.breatheco.de/apis/fake/contact/agenda/aserdnad");
						const data = await respuesta.json();
						if (data.length < 1) {
							const crearAgenda = async () => {
								try {
									const respuestaNoExiste = await fetch(
										"https://assets.breatheco.de/apis/fake/contact/",
										{
											method: "POST",
											headers: { "Content-Type": "application/json" },
											body: JSON.stringify({
												full_name: "aserdnad",
												email: "aserdnad@gmail.com",
												agenda_slug: "aserdnad",
												address: "47568 NW 34ST, 33434 FL, USA",
												phone: "0416472993"
											})
										}
									);
									const dataNoExiste = await respuestaNoExiste.json();
									setStore({ agenda: dataNoExiste });
								} catch (error) {
									console.log(error);
								}
							};
							crearAgenda();
						} else {
							setStore({ agenda: data });
						}
					} catch (error) {
						console.log(error);
					}
				};
				conseguirAgenda();
			}

			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
		}
	};
};

export default getState;
