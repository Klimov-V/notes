const Home = { 
    template: `

    <div>
        <div class="row my-4">
            <div class="col-md-8">
                <h1>My notes</h1>
            </div>
            <div class="col-md-4">
                <button class="btn btn-block btn-primary" 
                        data-toggle="modal" 
                        data-target="#createModal">Create a note</button>
            </div>
        </div>
    
        <div class="row">
            <div class="col">
                <ul class="list-group">
                    <note 
                        v-for="(note, index) in notes" 
                        :name="note.name" 
                        :key="index" 
                        :id="index"
                        @delete="remove"></note>
                </ul>
            </div>
        </div>
    
        <modalCreate @oncreate="create"></modalCreate>
        <modalRemove :item="forDelete" @onremove="remove"></modalRemove>
    </div>
`,

    data: function() {
        return {
            newNoteName: '',
            forDelete: {
                id: null,
                name: null
            },
            notes: [],
        }
    },
    mounted: function() {
        this.notes = this.getData();
    },
    methods: {
        create: function(name) {
            this.notes.push({
                name: name, 
                todos: []
            });
            this.setData();
        },
        remove: function(id) {
            
            if (!this.forDelete.id) {
                this.forDelete.id = id;
                this.forDelete.name = this.notes[this.forDelete.id - 1].name;
            } else {
                this.notes.splice(this.forDelete.id - 1, 1);
                this.forDelete.id = null;
                this.forDelete.name = name;
                this.setData();
            }
        },
        getData: function() {
            let notes = localStorage.getItem('notes');
            return this.notes = notes ? JSON.parse(notes) : [];
        },
        setData: function(data) {
            localStorage.setItem('notes', JSON.stringify( this.notes));
        },
    }
    

};

    
