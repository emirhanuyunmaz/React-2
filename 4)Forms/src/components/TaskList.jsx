import SingleTask from "./SingleTask";

export default function TaskList({tasks}) {
    return (<div className="flex flex-wrap gap-2 justify-center">
        {tasks.taskList.map((item) => <SingleTask key={item.id} task={item} taskList={tasks.taskList} setTaskList={tasks.setTaskList} />) }

    </div>)
} 