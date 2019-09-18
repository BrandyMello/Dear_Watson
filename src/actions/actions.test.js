import { addMessage, clearMessages } from './index';

describe('actions', () => {
  it('should have a type of "ADD_MESSAGE"', () => {
    const mockUser = true
    const mockMsg = "Blah blah";
    const mockMessages2 = [{}, {}]
    const mockMessages = 
      {type: 'ADD_MESSAGE',
      messages: [...mockMessages2, { isUser: mockUser }, {message: mockMsg}, {message: mockMsg, isUser: mockUser}]}
    
    const expectedAction = {
      type: 'ADD_MESSAGE',
      messages: mockMessages
    }

    const result = addMessage(mockMessages, mockMsg, mockUser);
    console.log(result)
    expect(result).toEqual(expectedAction);
  });
});