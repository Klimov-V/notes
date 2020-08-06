Vue.component('modalRemove', {
    props: ['item'],
    template: `
    <div 
        class="modal fade" 
        id="removeModal" 
        tabindex="-1" 
        aria-labelledby="removeModalLabel" 
        aria-hidden="true">

        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="removeModalLabel">Confirm</h5>
                </div>
                <div class="modal-body">
                    <p>Are you sure you whont to delete?<br> <b>"{{item.name}}"</b></p>
                </div>
                <div class="modal-footer">
                    <button 
                            type="button" 
                            class="btn btn-primary" 
                            data-dismiss="modal"
                            @click="$emit('onremove')">Yes</button>
                    <button 
                            type="button" 
                            class="btn btn-secondary" 
                            data-dismiss="modal"
                            @click="item.id = null; item.name = null">Cancel</button>
                </div>
            </div>
        </div>
    </div>
    `
})