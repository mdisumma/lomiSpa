function LogOut() {
	return (
		<div className="userButtons">
			<button
				onClick={() => {
					window.location.href = `/`;
				}}
			>
				log out
			</button>
		</div>
	);
}
export default LogOut;
