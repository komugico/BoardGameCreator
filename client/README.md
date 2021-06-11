# Client Side

## Routing
Client URLs should be named based on the following rule.
```
https://[HOSTNAME]:[PORT]/[SITE NAME]/[APP NAME]/[FUNCTION NAME]
```

## Directory Structure
Directories should be like following structure.
```
[SITE NAME]
+---public
    +---index.html
+---src
    +---index.js
    +---apps
        +---shared
            +---HeaderModule.js
            +---FooterModule.js
            +---[SHARED MODULE NAME]Module.js
        +---[APP NAME]
            +---[APP NAME]Router.js
            +---components
                +---[FUNCTION NAME]
                    +---atoms
                        +---[ATOM NAME]Atom.js
                    +---blocks
                        +---[BLOCK NAME]Block.js
                    +---modules
                        +---[MODULE NAME]Module.js
            +---containers
                +---[FUNCTION NAME]Container.js
            +---stores
                +---[FUNCTION NAME]
                    +---actions.js
                    +---constants.js
                    +---logics.js
                    +---reducer.js
                    +---store.js
```