import { messages } from './messages';

describe('messages', () => {
  it('should return the state if the type does not match', () => {
    const expected = [];
    const result  = messages(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return an empty array if "CLEAR_MESSAGES" matches', () => {
    const expected = [];
    const actionObj = {
      type: 'CLEAR_MESSAGES'
    }

    const result = messages(undefined, actionObj);
    expect(result).toEqual(expected);
  });

  it('should return messages if "ADD_MESSAGE" matches', () => {
    const expected = [];
    const actionObj = {
      type: 'ADD_MESSAGE',
      messages: [[], { isUser: mockUser }, { message: mockMsg }, { message: mockMsg, isUser: mockUser }]
    }

    const result = messages(undefined, actionObj);
    console.log(result)
    expect(result).toEqual(expected);
  });
});