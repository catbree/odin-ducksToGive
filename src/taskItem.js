export default function printMe() {
    console.log('I get called from taskItem.js!');
  }

  class taskItem {
    constructor(title,scheduledDate,project,duckCount,isCompleted) {
        this.title = title;
        this.scheduledDate = scheduledDate;
        this.project = project;
        this.duckCount = duckCount;
        this.isCompleted = isCompleted;
    }
  }