class DOMHelper {
    static clearEventListners(element) {
        const clonedElement = element.cloneNode(true);
        element.replaceWith(clonedElement);
        return clonedElement;
    }

    static moveElement(elementId, newDestinationSelector) {
        const element = document.getElementById(elementId);
        const destinationElement = document.querySelector(newDestinationSelector);
        destinationElement.append(element);
    }
}

class Tooltip {}

class ProjectItem {
    constructor(id, updateProjectListsFunction, type) {
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton(type);
    }

    connectMoreInfoButton() {}

    connectSwitchButton(type) {
        const prjectItemElement = document.getElementById(this.id);
        let switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn = DOMHelper.clearEventListners(switchBtn);
        switchBtn.textContent = type == 'active' ? 'Finish' : 'Active';
        switchBtn.addEventListener('click', this.updateProjectListsHandler.bind(null, this.id));
    }

    update(updateProjectListsFn, type) {
        this.updateProjectListsHandler = updateProjectListsFn;
        this.connectSwitchButton(type);
    }
}

class ProjectList {
    projects = [];
    
    constructor(type) {
        this.type.type;
        const prjItems = document.querySelectorAll(`#${type}-projects li`);
        for(const prjItem of prjItems) {
            this.projects.push(
                new ProjectItem(prjItem.id, this.switchProject.bind(this))
            );
        }
        console.log(this.projects);
    }

    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    addProject() {
        console.log(this);
    }

    switchProject(projectId) {
        this.switchHandler(this.projects.find(p => p.id == projectId));
        this.projects = this.projects.filter(p => p.id !== projectId);
    }
}

class App {
    static init() {
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
        activeProjectsList.setSwitchHandlerFunction(
            activeProjectsList.addProject.bind(activeProjectsList)
        );
    }
}

App.init();