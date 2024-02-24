import Instagram from "./../components/Instagram";

const Contact = () => {
	return (
		<>
			<div className="contact-wrapper">
				<h4>Ako želite da me kontaktirate, evo načina:</h4>

				<div className="contact-form">
					<div className="socials">
						<a
							href="https://instagram.com/rilex0808"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Instagram />
						</a>
					</div>
					<form method="POST" action="emailsender.php">
						<div className="form-input">
							<input
								className="box"
								type="text"
								name="name"
								id="name"
								required
							/>
							<label htmlFor="name">Ime i Prezime</label>
						</div>
						<div className="form-input">
							<input
								className="box"
								type="email"
								name="email"
								id="email"
								required
							/>
							<label htmlFor="email">Email</label>
						</div>

						<div className="form-input">
							<textarea
								className="box"
								name="message"
								id="message"
								cols="30"
								rows="10"
								minLength={10}
								required
							></textarea>
							<label htmlFor="message">Poruka</label>
						</div>
						<div className="form-input">
							<input type="submit" value="Pošalji" />
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
