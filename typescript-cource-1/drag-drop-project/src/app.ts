//Validation

interface Validatable {
  value: string | number
  required?: boolean
  minLength?: number
  maxLength?: number
  min?: number
  max?: number
}

function validate (validatableInput: Validatable) {
  let isValid = true
  const isRequired = validatableInput.required

  if (isRequired) {
    isValid = isValid && validatableInput.value.toString().trim().length !== 0
  }

  if (validatableInput.minLength != null && typeof validatableInput.value === 'string') {
    isValid = isValid && validatableInput.value.length >= validatableInput.minLength
  }

  if (validatableInput.maxLength != null && typeof validatableInput.value === 'string') {
    isValid = isValid && validatableInput.value.length <= validatableInput.maxLength
  }

  if (validatableInput.min != null && typeof validatableInput.value === 'number') {
    isValid = isValid && validatableInput.value >= validatableInput.min
  }

  if (validatableInput.max != null && typeof validatableInput.value === 'number') {
    isValid = isValid && validatableInput.value <= validatableInput.max
  }

  return isValid
}
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

//ProjectList Class

class ProjectList {
  templateElement: HTMLTemplateElement
  hostElement: HTMLDivElement
  element: HTMLElement

  constructor (private type: 'active' | 'finished') {
    this.templateElement = document.getElementById('project-list')! as HTMLTemplateElement
    this.hostElement = document.getElementById('app')! as HTMLDivElement

    const importedNode = document.importNode(this.templateElement.content, true)
    this.element = importedNode.firstElementChild as HTMLElement
    this.element.id = `${this.type}-projects`

    this.attach()
    this.renderContent()
  }

  private attach () {
    this.hostElement.insertAdjacentElement('beforeend', this.element)
  }

  private renderContent () {
    const listId = `${this.type}-projects-list`

    this.element.querySelector('ul')!.id = listId
    this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS'

  }
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

  private attach () {
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

  private configure () {
    this.element.addEventListener('submit', this.submitHandler)
  }
}

const prjInput = new ProjectInput()
const activePrjList= new ProjectList('active');
const finishedPrjList= new ProjectList('finished');