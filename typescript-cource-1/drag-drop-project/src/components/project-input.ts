///<reference path="../util/validation.ts"/>
///<reference path="../decorator/autobind.ts"/>
///<reference path="../state/project-state.ts"/>
///<reference path="./base-component.ts"/>

namespace App {
  //ProjectInput Class
  export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement>{
    titleInputElement: HTMLInputElement
    descriptionInputElement: HTMLInputElement
    peopleInputElement: HTMLInputElement

    constructor () {
      super('project-input', 'app', true, 'user-input')
      this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement
      this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement
      this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement

      this.configure()
    }

    configure () {
      this.element.addEventListener('submit', this.submitHandler)
    }

    renderContent() {}

    private clearInput () {
      const clearElement = (element: HTMLInputElement) => element.value = ''

      clearElement(this.titleInputElement)
      clearElement(this.descriptionInputElement)
      clearElement(this.peopleInputElement)
    }

    @Autobind
    private submitHandler (event: Event){
      event.preventDefault()
      const userInput = this.gatherUserInput()

      if (Array.isArray(userInput)) {
        const [title, description, people] = userInput
        console.log(`title: ${title}; description: ${description}; people: ${people}`)

        projectState.addProject(title, description, people)

        this.clearInput()
      }
    }

    private gatherUserInput (): [string, string, number] | void {
      const enteredTitle = this.titleInputElement.value
      const enteredDescriptorTitle = this.descriptionInputElement.value
      const enteredPeopleTitle = this.peopleInputElement.value

      const tittleValidatable: Validatable = {
        value: enteredTitle,
        required: true,
      }

      const descriptionValidatable: Validatable = {
        value: enteredDescriptorTitle,
        required: true,
        minLength: 5,
      }

      const peopleValidatable: Validatable = {
        value: +enteredPeopleTitle,
        required: true,
        min: 2,
        max: 5,
      }

      const validateCondition = !validate(tittleValidatable) || !validate(descriptionValidatable) || !validate(peopleValidatable)

      if (validateCondition) {
        alert('Invalid input')
        return
      } else {
        return [enteredTitle, enteredDescriptorTitle, +enteredPeopleTitle]
      }
    }
  }
}