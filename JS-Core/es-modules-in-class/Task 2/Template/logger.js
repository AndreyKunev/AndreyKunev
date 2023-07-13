const defaultInfoMsg = 'No info provided!';

const info = (msg = defaultInfoMsg) => {
    console.info(`Info: ${msg || defaultInfoMsg}`);
};

const defaultErrorMsg = 'This is the default error message.'

const error = (msg = defaultErrorMsg) => {
    console.info(`Error: ${msg || defaultInfoMsg}`);

};

const defaultSuccessMsg = 'Success!';

const success = (msg = defaultSuccessMsg) => {
    console.info(`Success: ${msg || defaultInfoMsg}`);
};

// Task:
// create default export with { info, error, success }

export default { info, error, success};