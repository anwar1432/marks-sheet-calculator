document.write("<h1><i>DMC</i></h1>");
document.write("<hr/>");
var studentName = prompt("Enter your Name");
document.write("Name: " + studentName);
document.write("<hr/>");
var urduMarks = parseInt(prompt("Enter Urdu Marks"));
document.write("UrduMarks: " + urduMarks);
document.write("<hr/>");
var engMarks = parseInt(prompt("Enter English Marks"));
document.write("EnglishMarks: " + engMarks);
document.write("<hr/>");
var mathsMarks = parseInt(prompt("Enter Maths Marks"));
document.write("MathsMarks: " + mathsMarks);
document.write("<hr/>");
var phyMarks = parseInt(prompt("Enter Physics Marks"));
document.write("PhysicsMarks: " + phyMarks);
document.write("<hr/>");
var islMarks = parseInt(prompt("Enter Islamiat Marks"));
document.write("IslamiatMarks: " + islMarks);
document.write("<hr/>");
var chMarks = parseInt(prompt("Enter Chemistry Marks"));
document.write("ChemistryMarks: " + chMarks);
document.write("<hr/>");
var obtainMarks =
  urduMarks + engMarks + mathsMarks + phyMarks + islMarks + chMarks;
var totalMarks = 550;
document.write("TotalMarks " + totalMarks);
document.write("<hr/>");
var percentage = (obtainMarks / totalMarks) * 100;
document.write("ObtainedMarks: " + obtainMarks);
document.write("<hr/>");
document.write("Percentage: " + percentage + "%");
document.write("<hr/>");
if (percentage == 100 && percentage >= 90) {
  document.write("Grade A1");
} else if (percentage >= 80 && percentage < 90) {
  document.write("Grade A");
} else if (percentage >= 70 && percentage < 80) {
  document.write("Grade B");
} else if (percentage >= 60 && percentage < 70) {
  document.write("Grade C");
} else if (percentage >= 50 && percentage < 60) {
  document.write("Grade D");
} else if (percentage >= 40 && percentage < 50) {
  document.write("Grade E");
} else if (percentage > 100) {
  document.write("Inputs-Is-Incorrect");
} else {
  document.write("Fail");
}
