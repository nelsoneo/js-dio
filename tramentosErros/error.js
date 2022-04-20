// new Error(message, fileName, lineNumber, columnNumber);

const meuError = new Error('Test error');
meuError.name = 'NeoError';

// throw meuError;
throw meuError.stack;