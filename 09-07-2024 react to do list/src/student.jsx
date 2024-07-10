import TrashIcon from "../src/assets/trash.svg"
import styles from "../src/App.module.css"
function Student({ student, onClick, children }) {
	const { id, nome, cognome } = student;

	return (
		<li className={styles.list}>
			{children} {nome} {cognome}
			<img id={id} onClick={onClick} src={TrashIcon} width={20} height={20}/>
		</li>
	);
}

export default Student;
