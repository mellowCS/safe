  function testcase() 
  {
    var desc = Object.getOwnPropertyDescriptor(arguments, "length");
    if (desc.configurable === true && desc.enumerable === false && desc.writable === true)
      return true;
  }
  {
    var __result1 = testcase();
    var __expect1 = true;
  }
  