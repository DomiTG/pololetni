export type Grade = 1 | 2 | 3 | 4 | 5;

export interface Subject {
  name: string;
  grades: Grade[];
}

export interface Student {
  id: number;
  name: string;
  subjects: Subject[];
}

export interface ReportEntry {
  studentName: string;
  subjectAverages: Record<string, number>;
  overallAverage: number;
}
