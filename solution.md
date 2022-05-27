I chose to use Vue 3 with composition API for this task. Because I'm already familiar
with Vue and many things are similar, like SFCs, template syntax and so on.
Vue 3 uses Vite build system instead of Webpack which is much faster, that eases and speeds up
development process. Another good thing is that resulting bundle is smaller in size.
Another nice thing about Vue 3 is composition API, which allows greater flexibility in organising application
structure.

I went with Typescript, but not overdoing types and only using them to make user data typed and thus more restricted.

I decided to implement each step of wizard as distinct component and all of them are children of the parent
component called Wizard, which handles events emitted by children, but doesn't do much by itself, but only hosts
it's children and keeps track of current step.

I organised the store of user data as a distinct module, so data could be available to all components that require the store
module. The data is organized with reactive and computeds, so all changes to the data are tracked by Vue reactive system.

Additionally, I implemented unit tests for the data module with Vitest framework.
