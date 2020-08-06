const View = {
    template: `
        <div>
            <div class="row my-4">
                <div class="col-md-6">
                    <h1>Editing record # {{ $route.params.id }}</h1>
                </div>
                <div class="col-md-6 text-right">
                    
                    <router-link to="/" class="btn btn-secondary">Back</router-link>
                    <router-link 
                        to="/"
                        v-if="notes.length"   
                        class="btn btn-success"
                        :disabled="notes[$route.params.id].name.length < 3">
                        <span @click="setData">Save and back</span>   
                    </router-link>
                    

                    <button v-if="notes.length"
                        type="button" 
                        class="btn btn-success"
                        :disabled="notes[$route.params.id].name.length < 3" 
                        @click="setData">Save</button>
                    
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <form>
                        <div class="mb-3">
                            <textarea v-if="notes.length"
                                v-model="notes[$route.params.id].name" 
                                class="form-control"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `,
    data: function() {
        return {
            notes: [],
        }
    },
    mounted: function() {
        this.notes = this.getData();
    },
    methods: {
        getData: function() {
            let notes = localStorage.getItem('notes');
            return this.notes = notes ? JSON.parse(notes) : [];
        },
        setData: function(data) {
            localStorage.setItem('notes', JSON.stringify( this.notes));
        },
        
    }
};