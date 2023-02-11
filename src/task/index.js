export class Task {
    constructor(age) {
        // eslint-disable-next-line constructor-super
        super(age);
        this.task = null

    }

    // 创建任务
    createTask(task) {
        this.task = task
    }

    // 删除任务
    removeTask() {
        this.task = null
    }

    // 更新任务
    updateTask(params) {
        if (!params || !this.task || !this.task.taskInfo) return
        this.task.taskInfo = params
    }

    // 获取任务
    getTask() {
        return this.task
    }
}