import { Grade, Student, Subject, ReportEntry } from "./types";
import { GradeCalculator } from "./GradeCalculator";

export class StudentManager {
  private students: Student[] = [];
  private nextId: number = 1;
  private calculator: GradeCalculator = new GradeCalculator();

  addStudent(name: string): Student {
    const student: Student = { id: this.nextId++, name, subjects: [] };
    this.students.push(student);
    return student;
  }

  findStudent(id: number): Student | undefined {
    return this.students.find((s) => s.id === id);
  }

  addGrade(studentId: number, subjectName: string, grade: Grade): void {
    const student = this.findStudent(studentId);
    if (!student) {
      throw new Error(`Student with id ${studentId} not found`);
    }

    let subject: Subject | undefined = student.subjects.find(
      (s) => s.name === subjectName
    );

    if (!subject) {
      subject = { name: subjectName, grades: [] };
      student.subjects.push(subject);
    }

    subject.grades.push(grade);
  }

  generateReport(): ReportEntry[] {
    return this.students.map((student) => ({
      studentName: student.name,
      subjectAverages: this.calculator.subjectAverages(student.subjects),
      overallAverage: this.calculator.overallAverage(student.subjects),
    }));
  }

  getAllStudents(): Student[] {
    return [...this.students];
  }
}
