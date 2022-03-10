const taskValue = document.getElementsByClassName('task_value')[0];
const taskSubmit = document.getElementsByClassName('task_add')[0];
const taskList = document.getElementsByClassName('task_list')[0];
const priority = document.querySelector('section');

const addTasks =(task)=>{
    const listItem = document.createElement('li');
    const showItem = taskList.appendChild(listItem);
    showItem.innerHTML = task;

    const completeButton = document.createElement('button');
    completeButton.innerHTML = 'かんりょう';
    completeButton.addEventListener('click',() => completeTask(completeButton));
    listItem.appendChild(completeButton);
    
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'さくじょ';
    listItem.appendChild(deleteButton);

    deleteButton.addEventListener('click',evt=>{
        evt.preventDefault();
        deleteTasks(deleteButton);
    }); 
};

const deleteTasks = (deleteButton) => {
    const chosenTask = deleteButton.closest('li');
    taskList.removeChild(chosenTask);
};

const completeTask = completeButton => {
    const targetTask = completeButton.closest('li');
    targetTask.classList.add('isComplete');
    targetTask.removeChild(completeButton);
};


taskSubmit.addEventListener('click', evt => {
    evt.preventDefault();
    const task = taskValue.value;
    addTasks(task);
    taskValue.value = '';
});


  (function(d) {
    var config = {
      kitId: 'jsq8kcs',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);

