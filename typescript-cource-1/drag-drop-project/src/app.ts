//autobind decorator

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value

  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get () {
      const boundFn = originalMethod.bind(this)
      return boundFn
    }
  }

  return adjDescriptor
}

//ProjectInput Class
class ProjectInput {
  templateElement: HTMLTemplateElement
  hostElement: HTMLDivElement
  element: HTMLFormElement

  titleInputElement: HTMLInputElement
  descriptionInputElement: HTMLInputElement
  peopleInputElement: HTMLInputElement

  constructor () {
    this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement
    this.hostElement = document.getElementById('app')! as HTMLDivElement

    const importedNode = document.importNode(this.templateElement.content, true)
    this.element = importedNode.firstElementChild as HTMLFormElement
    this.element.id = 'user-input'

    this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement
    this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement
    this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement

    this.configure()
    this.attach()
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element)
  }

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
      this.clearInput()
    }
  }

  private gatherUserInput (): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value
    const enteredDescriptorTitle = this.descriptionInputElement.value
    const enteredPeopleTitle = this.peopleInputElement.value

    const validate = (val: any) => val.trim().length === 0
    const validateCondition =
      validate(enteredTitle) ||
      validate(enteredDescriptorTitle) ||
      validate(enteredPeopleTitle)

    if (validateCondition) {
      alert('Invalid input')
      return
    } else {
      return [enteredTitle, enteredDescriptorTitle, +enteredPeopleTitle]
    }
  }

  private configure () {
    this.element.addEventListener('submit', this.submitHandler)
  }
}

const prjInput = new ProjectInput()