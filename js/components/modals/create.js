Vue.component('modalCreate', {
    props: [],
    data: function() {
        return {
            name: '',
        }
    },
    template: `
    <div 
        class="modal fade" 
        id="createModal" 
        tabindex="-1" 
        aria-labelledby="createModalLabel" 
        aria-hidden="true">

        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="createModalLabel">New note</h5>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <textarea class="form-control" v-model="name"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button 
                            type="button" 
                            class="btn btn-secondary" 
                            data-dismiss="modal"
                            @click="name = ''">Close</button>
                    <button 
                            type="button" 
                            class="btn btn-primary" 
                            data-dismiss="modal"
                            :disabled="name.length < 3"
                            @click="$emit('oncreate', name); name = ''">Create</button>
                </div>
            </div>
        </div>
    </div>
    `
})