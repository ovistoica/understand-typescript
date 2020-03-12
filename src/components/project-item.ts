/// <reference path='base-component.ts' />
/// <reference path='../decorators/autobind.ts' />
/// <reference path='../models/drag-drop.ts' />
/// <reference path='../models/project.ts' />
namespace App {
  export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement>
    implements Draggable {
    private project: Project;

    get persons() {
      return this.project.people === 1
        ? "1 person"
        : `${this.project.people} persons`;
    }

    constructor(hostId: string, project: Project) {
      super("single-project", hostId, false, project.id);
      this.project = project;
      this.configure();
      this.renderContent();
    }

    @AutoBind
    dragStartHandler(event: DragEvent) {
      event.dataTransfer!.setData("text/plain", this.project.id);
      event.dataTransfer!.effectAllowed = "move";
    }

    @AutoBind
    dragEndHandler(event: DragEvent) {
      console.log("DRAG END", event);
    }

    configure() {
      this.element.addEventListener("dragstart", this.dragStartHandler);
      this.element.addEventListener("dragend", this.dragEndHandler);
    }

    renderContent() {
      this.element.querySelector("h2")!.textContent = this.project.title;
      this.element.querySelector("h3")!.textContent =
        this.persons + " assigned";
      this.element.querySelector("p")!.textContent = this.project.description;
    }
  }
}
