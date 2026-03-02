import { StudentManager } from "./StudentManager";
import { GradeCalculator } from "./GradeCalculator";

const manager = new StudentManager();
const calculator = new GradeCalculator();

const alice = manager.addStudent("Alice Nováková");
const bob = manager.addStudent("Bob Procházka");
const carol = manager.addStudent("Carol Dvořáčková");

manager.addGrade(alice.id, "Matematika", 1);
manager.addGrade(alice.id, "Matematika", 2);
manager.addGrade(alice.id, "Matematika", 1);
manager.addGrade(alice.id, "Čeština", 2);
manager.addGrade(alice.id, "Čeština", 3);
manager.addGrade(alice.id, "Fyzika", 1);
manager.addGrade(alice.id, "Fyzika", 2);

manager.addGrade(bob.id, "Matematika", 3);
manager.addGrade(bob.id, "Matematika", 4);
manager.addGrade(bob.id, "Matematika", 3);
manager.addGrade(bob.id, "Čeština", 2);
manager.addGrade(bob.id, "Čeština", 3);
manager.addGrade(bob.id, "Fyzika", 4);
manager.addGrade(bob.id, "Fyzika", 5);

manager.addGrade(carol.id, "Matematika", 2);
manager.addGrade(carol.id, "Matematika", 2);
manager.addGrade(carol.id, "Čeština", 1);
manager.addGrade(carol.id, "Čeština", 1);
manager.addGrade(carol.id, "Fyzika", 3);
manager.addGrade(carol.id, "Fyzika", 2);

const report = manager.generateReport();

console.log("=== Pololetní vysvědčení ===\n");

for (const entry of report) {
  console.log(`Žák: ${entry.studentName}`);

  for (const [subject, avg] of Object.entries(entry.subjectAverages)) {
    console.log(`  ${subject}: průměr ${avg}`);
  }

  const overall = entry.overallAverage;
  const rating = calculator.letterRating(overall);
  console.log(`  Celkový průměr: ${overall} (${rating})`);
  console.log();
}

const best = report.reduce((prev, curr) =>
  curr.overallAverage < prev.overallAverage ? curr : prev
);

console.log(`Nejlepší žák: ${best.studentName} (průměr ${best.overallAverage})`);
