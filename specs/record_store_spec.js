var assert = require("assert")
var RecordStore = require("../record_store")
var Record = require("../record")

describe("Record Store", function () {
  var recordStore
  var record1
  var record2

  beforeEach(function () {
    recordStore = new RecordStore("bind(records)", "Edinburgh")
    record1 = new Record("Jimi Hendrix", "Axis Bold As Love", "Classic", 100)
    record2 = new Record("Radiohead", "In Rainbows", "Indie", 10)
  })

  it("should have a name", function () {
    assert.strictEqual(recordStore.name, "bind(records)")
  })

  it("should have a city", function () {
    assert.strictEqual(recordStore.city, "Edinburgh")
  })

  it("should have an empty inventory at start", function () {
    assert.strictEqual(recordStore.inventory.length, 0)
  })

  it("should have 0 balance at start", function () {
    assert.strictEqual(recordStore.balance, 0)
  })

  it("should be able to add records", function () {
    recordStore.addRecord(record1)
    recordStore.addRecord(record2)
    
    assert.strictEqual(recordStore.inventory.length, 2)
    assert.ok(recordStore.inventory.includes(record1))
    assert.ok(recordStore.inventory.includes(record2))
  })

})