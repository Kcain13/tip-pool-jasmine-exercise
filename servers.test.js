describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server with empty input on submitServerInfo()', function () {
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update id servertable on updateServerTable()', () => {
    submitServerInfo();
    updateServerTable();

    let curTableList = document.querySelector('#serverTable t body tr td');
    expect(curTableList.length).toEqual(3);
    expect(curTableList[0].innerText).toEqual('Alice');
    expect(curTableList[1].innerText).toEqual('$0.00');
    expect(curTableList[2].innerText).toEqual('X');
  });

  afterEach(function () {
    // teardown logic
    serverId = 0;
    serverTbody.innerhtml = '';
    allServers = {};
  });
});
