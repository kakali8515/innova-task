<template>
    <div>
        <form class="row g-3" @submit.prevent="handleSubmit">
            <template v-for="(block, index) in blocks" :key="index">
                <div class="col-md-6">

                    <div v-if="block.type == 'checkbox'" class="form-check mt-4">
                        <input class="form-check-input" @click="getcheckData(block, $event)"
                            :class="block.props.error ? 'is-invalid' : ''" type="checkbox"
                            v-model="formData[block.token]" :id="block.token">
                        <label class="form-check-label" :for="block.token">
                            {{ block.props.title }}
                        </label>
                    </div>

                    <div v-else-if="block.type == 'textarea'" class="mb-3">
                        <label :for="block.token" class="form-label">{{ block.props.title }}</label>
                        <textarea v-model="formData[block.token]" :class="block.props.error ? 'is-invalid' : ''"
                            class="form-control" :placeholder="block.props.placeholder" rows="3"></textarea>
                        <div class="invalid-feedback" v-if="block.props.error">
                            {{ block.props.error }}
                        </div>
                    </div>

                    <div v-else-if="block.type == 'select'">
                        <label :for="block.props.title" class="form-label">{{ block.props.title }}</label>
                        <select v-model="formData[block.token]" class="form-select"
                            :class="block.props.error ? 'is-invalid' : ''">
                            <option selected disabled value="">Choose...</option>
                            <option v-for="(option, index) in block.props.options" :key="index" :value="option.value">{{
            option.label }}</option>
                        </select>
                        <div class="invalid-feedback" v-if="block.props.error">
                            {{ block.props.error }}
                        </div>
                    </div>

                    <div v-else>
                        <label :for="block.props.title" class="form-label">{{ block.props.title }}</label>
                        <input :type="block.type" class="form-control" :class="block.props.error ? 'is-invalid' : ''"
                            v-model="formData[block.token]" :placeholder="block.props.placeholder">
                        <div class="invalid-feedback" v-if="block.props.error">
                            {{ block.props.error }}
                        </div>
                    </div>
                </div>
            </template>
            <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit</button>
            </div>
        </form>
        <br />
        <div v-if="isSubmit">
            <h5>Submitted Data :</h5>
            <p>{{ formData }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FormValidation',
    data() {
        return {
            formData: {
                PERSON_ADDRESS: ''
            },
            isSubmit: false,
            blocks: [
                {
                    "token": "PERSON_NAME",
                    "type": "text",
                    "props": {
                        "title": "Enter Your name",
                        "required": true,
                        "placeholder": "e.g. John Doe"
                    }
                },
                {
                    "token": "IS_PERSON_MINOR",
                    "type": "checkbox",
                    "props": {
                        "title": "Is the current person minor?",
                        "default": false,
                    }
                },
                {
                    "token": "PERSON_DOB",
                    "type": "date",
                    "props": {
                        "title": "Enter Your DOB",
                        "required": "IS_PERSON_MINOR",
                        "placeholder": "e.g. 01/01/2000"
                    }
                },
                {
                    "token": "PERSON_ADDRESS",
                    "type": "select",
                    "props": {
                        "title": "Choose Your Address",
                        "required": true,
                        "placeholder": "",
                        options: [
                            { label: "Option 1", value: "option1" },
                            { label: "Option 2", value: "option2" },
                            { label: "Option 3", value: "option3" }
                        ],
                    }
                },
                {
                    "token": "PERSON_FEEDBACK",
                    "type": "textarea",
                    "props": {
                        "title": "Enter Your Feedback",
                        "required": true,
                        "placeholder": "Enter Your Feedback"
                    }
                }
            ]
        }
    },
    methods: {
        handleSubmit() {
            const isPersonMinorBlock = this.blocks.find(block => block.token === "IS_PERSON_MINOR");
            if (!this.formData[isPersonMinorBlock.token]) {
                this.formData[isPersonMinorBlock.token] = false;
            }

            // Validate the form data before submitting
            if (this.validateFormData()) {
                this.isSubmit = true;
                console.log("Form submitted with data:", this.formData);
            } else {
                console.error("Form validation failed!");
            }
        },
        getcheckData(block, event) {
            if (event.target.checked) {
                block.props.default = true;
            } else {
                block.props.default = false;
                this.formData['PERSON_DOB'] = '';
            }
        },
        validateFormData() {
            let isValid = true;
            for (const block of this.blocks) {
                if (block.props.required && block.props.required !== 'IS_PERSON_MINOR' && !this.formData[block.token]) {
                    block.props.error = "The field is required";
                    isValid = false;
                } else if (this.formData.IS_PERSON_MINOR && block.token == 'PERSON_DOB' && !this.formData['PERSON_DOB']) {
                    block.props.error = "The field is required";
                    isValid = false;
                } else {
                    block.props.error = "";
                }
            }
            return isValid;
        }
    }
};
</script>