import { Grade, Subject } from "./types";

export class GradeCalculator {
  average(grades: Grade[]): number {
    if (grades.length === 0) {
      return 0;
    }
    const sum = grades.reduce((acc, grade) => acc + grade, 0);
    return Math.round((sum / grades.length) * 100) / 100;
  }

  subjectAverages(subjects: Subject[]): Record<string, number> {
    return subjects.reduce<Record<string, number>>((acc, subject) => {
      acc[subject.name] = this.average(subject.grades);
      return acc;
    }, {});
  }

  overallAverage(subjects: Subject[]): number {
    const allGrades = subjects.flatMap((s) => s.grades);
    return this.average(allGrades);
  }

  letterRating(average: number): string {
    if (average <= 1.5) return "Výborný";
    if (average <= 2.5) return "Chvalitebný";
    if (average <= 3.5) return "Dobrý";
    if (average <= 4.5) return "Dostatečný";
    return "Nedostatečný";
  }
}
