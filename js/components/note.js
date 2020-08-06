Vue.component('note', {
    props: ['id', 'name'],
    template: `
    <li class="list-group-item">
        <div class="row">
            <div class="col-md-8">{{name}}</div>
            <div class="col-md-2">
            <router-link 
                type="button"
                class="btn btn-block btn-warning"
                :to="{ name: 'view', params: {id: id} }">Edit
            </router-link>
            </div>
            <div class="col-md-2">
                <button 
                    type="button" 
                    class="btn btn-block btn-danger"
                    @click="$emit('delete', id + 1)"
                    data-toggle="modal" 
                    data-target="#removeModal">Delete</button>
            </div>
        </div>
    </li>
    `
})