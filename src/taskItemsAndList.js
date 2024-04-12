export class TaskItem {
    constructor(title,scheduledDate,project,duckCount,isCompleted) {
        this.title = title;
        this.scheduledDate = scheduledDate;
        this.project = project;
        this.duckCount = duckCount;
        this.isCompleted = isCompleted;
    }
  }


class TaskList {
  constructor() {
    this.taskItems = [];
  }
}

export const taskList = new TaskList;

taskList.taskItems[0] = new TaskItem("Take out the trash", "12/04/2024", "Housekeeping", "1", false);
taskList.taskItems[1] = new TaskItem("Bring doggo to the vet", "15/04/2024", "Housekeeping", "2", false);
taskList.taskItems[2] = new TaskItem("Complete ducks todo project", "16/04/2024", "Work", "6", false);
  