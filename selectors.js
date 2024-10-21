class Selector {
    constructor (containerEl = {}, options = [{name: '', value: '', selected: false, optionEl: {}}], multiple = false, renderText = false) {
        this.containerEl =  containerEl;
        this.options = options;
        this.optionsEl = {};
        this.inputEl = this.containerEl.querySelector('.component-input');
        this.multiple = multiple;
        this.renderText = renderText;
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

        if(this.containerEl.getAttribute('data-icon') === 'true')
            this.renderIcon();

        if(this.renderText)
            this.renderSelectedText();

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

    renderSelectedText() {
        let sOptions = this.getSelectedOptions();

        if(sOptions.length === this.options.length)
            this.inputEl.value = "All";
        else
            this.inputEl.value = sOptions.map(obj => obj.name).join(', ');
    }

    renderIcon() {
        let iconEl = document.getElementById(this.containerEl.getAttribute('data-iconID'));

        console.log(iconEl)
        
        if(this.getSelectedOptions().length > 0)
            iconEl.classList.remove('hidden');
        else
            iconEl.classList.add('hidden');
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