describe("Big Cartel Front-End Dev Test", function() {

  it("serializes a form into JSON", function() {
    expectedOutput = {
      'input_one': 'value one',
      'input_four': 'value four',
      'input_five': 'value five',
      'input_seven': 'value seven',
      'input_nine': 'option 1'
    };

    expect(SerializeForm('#serialize_me')).toEqual(expectedOutput);
    expect(SerializeForm('.serialize_me')).toEqual(expectedOutput);
    expect(SerializeForm('form[name=serialize_me]')).toEqual(expectedOutput);
    expect(SerializeForm('form[name=not_found]')).toEqual({});
  });

  it("flattens the given object", function() {
    input = {
      'index': {
        'about': {
          'team': true,
          'company': ['Jim', 'Barry']
        }
      }
    };

    output = {
      'index/about/team': true,
      'index/about/company': ['Jim', 'Barry']
    };

    expect(FlattenObject(input)).toEqual(output);
  });

});
