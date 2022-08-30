const getStudents = (classroom) => {
	let { hasTeachingAssistant, classList } = classroom
	let teacher, teachingAssistant, students
	if (hasTeachingAssistant) {
		;[teacher, teachingAssistant, ...students] = classList
	} else {
		;[teacher, ...students] = classList
	}
	return students
}
const classRoom = {
	hasTeachingAssistant: false,
	classList: ["Teacher", "S1", "S2", "S3", "S4", "S5"],
}

console.log(getStudents(classRoom))
