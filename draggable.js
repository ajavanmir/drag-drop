/*
Copyright amir javanmir
Released on: February 12, 2024
*/
class draggable{
    dragSrcEl = "";
    constructor(options){
        //first setup config
        this.setupList(options);
        this.list = options.list;

        //loop items for add event
        for(let listItem of options.el.children){
            this.addDrgHandler(listItem);
        }
    }

    //config
    setupList(options) {
        let {el : element, list, template} = options;
        if(!element)throw Error("not found tag list!");
        if(!list || !Array.isArray(list))throw Error("error in list!");
        if(!template || typeof template != "function")throw Error("error in template!");
        list.forEach((item)=>{
            element.innerHTML += template(item);
        })
    }

    //add event for drag and drop all elements
    addDrgHandler(element){
        element.setAttribute('draggable', true);
        element.addEventListener("dragstart", this.handlerDragstart.bind(this));
        element.addEventListener("dragover", this.handlerDragover.bind(this));
        element.addEventListener("dragleave", this.handlerDragleave.bind(this));
        element.addEventListener("drop", this.handlerDrop.bind(this));
        element.addEventListener("dragend", this.handlerDragend.bind(this));
    }

    //drag start
    handlerDragstart(e){
        this.dragSrcEl = e.target.closest('.list-item');
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html",e.target.outerHTML);
        e.target.classList.add("dragElement");
    }

    //drag over
    handlerDragover(e){
        if(e.preventDefault)e.preventDefault();
        if(e.target.classList.contains("list-item")){
            e.target.classList.add("overElement");
        }
    }

    //drag leave
    handlerDragleave(e){
        if(e.target.classList.contains("list-item")){
            e.target.classList.remove("overElement");
        }
    }

    //drag drop
    handlerDrop(e){
        let target = e.target.closest('.list-item');
        if(this.dragSrcEl != target){
            this.dragSrcEl.remove();
            let dropHTML = e.dataTransfer.getData("text/html");
            target.insertAdjacentHTML('beforebegin' , dropHTML);
            this.addDrgHandler(target.previousSibling)
        }
        e.target.classList.remove("overElement")
    }

    //drag end
    handlerDragend(e){
        e.target.classList.remove('dragElement');
        let newList = [];
        list.querySelectorAll(".list-item").forEach((item)=>{
            newList.push(this.list.find(data=> data.id == item.id));
        })
    }
}