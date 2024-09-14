class Selector {
    constructor (containerEl = {}, options = [{name: '', value: '', selected: false, optionEl: {}}], multiple = false) {
        this.containerEl =  containerEl;
        this.options = options;
        this.optionsEl = {};
        this.inputEl = this.containerEl.querySelector('.component-input');
        this.multiple = multiple;
    }

    renderSelector() {
        const optionsEl = document.createElement('div');
        this.optionsEl = optionsEl;

        optionsEl.classList.add('options');

        this.containerEl.append(optionsEl);

        this.renderOptions();
    }

    renderOptions() {
        this.optionsEl.innerHTML = "";

        if(this.multiple) this.sortOptions();

        this.options.forEach(option => {
            const optionEl = document.createElement('div');

            optionEl.classList.add('option');

            if(option.selected) {
                if(!this.multiple) this.inputEl.value = option.name;

                optionEl.classList.add('active');
            } 

            if(!this.multiple) {
                optionEl.innerHTML = `
                    <div class="selector-icon">
                        <span class="radio-icon"></span>
                    </div>
                    ${option.name}
                `;
            } else {
                optionEl.innerHTML = `
                    <div class="device-check">
                        <span class="check-icon"></span>
                    </div>
                    ${option.name}
                `;
            }

            optionEl.id = option.value;

            this.optionsEl.append(optionEl);
            option.optionEl = optionEl;
        })

        this.addEvents();
    }

    addEvents() {
        this.optionsEl.addEventListener('click', event => {
            this.optionsEl.classList.add('open');
        })

        this.options.forEach(option => {
            option.optionEl.addEventListener('click', (event) => {
                event.preventDefault();

                if(!this.multiple) {
                    this.options.forEach(option => {
                        option.selected = false;
                        option.optionEl.classList.remove('active');
                    })
    
                    option.selected = true;
    
                    option.optionEl.classList.add('active');

                    this.inputEl.value = option.name;
                } else {
                    option.selected = !option.selected;
    
                    option.optionEl.classList.toggle('active');
                }

                this.renderOptions();
            })
        })

        document.addEventListener('click', event => {
            let children = [
                ...this.optionsEl.childNodes
            ];

            if(children.some(child => event.target.id === child.id)) return this.optionsEl.classList.add('open');
            
            if(event.target !== this.optionsEl 
            && event.target !== this.containerEl.querySelector('.input-container')
            && event.target !== this.inputEl) this.optionsEl.classList.remove('open')

        })

        this.containerEl.querySelector('.input-container').addEventListener('click', event => {
            this.optionsEl.classList.add('open');
        })

        this.inputEl.addEventListener('input', event => {
            this.renderSearchOptions(event.target.value.toLowerCase());
        })
    }

    renderSearchOptions(search) {
        this.options.forEach(option => {
            option.optionEl.classList.remove('hidden');

            if(!option.name.trim().toLocaleLowerCase().includes(search)) return option.optionEl.classList.add('hidden');
        })
    }

    sortOptions() {
        this.options = this.options
            .sort((a, b) => {
                if(a.name > b.name) return 1;
                else if(a.name < b.name) return -1;

                return 0;
            }).sort((a, b) => {
                if(a.selected < b.selected) return 1;
                else if(a.selected > b.selected) return -1;
    
                return 0;
            });
    }

    getSelectedOptions() {
        return this.options.filter(option => option.selected === true);
    }
}

export default Selector;