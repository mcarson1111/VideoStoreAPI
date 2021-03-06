var request = require("request")
var baseUrl = "http://localhost:3000"

describe("MovieController", function() {
  var url = function(endpoint) {
    return baseUrl + "/movies" + endpoint
  }

  describe(".all", function(done) {
    it("returns a response", function(done) {
      request.get(url("/"), function(error, response, body) {
        done()
      })
    })

    it("returns JSON", function(done) {
      request.get(url("/"), function(error, response, body) {
        expect(response.headers['content-type']).toContain('application/json')
        done()
      })
    })

    it("should be an array of objects", function(done) {
      request.get(url("/"), function(error, response, body) {
        var data = JSON.parse(body)
        expect(typeof data).toEqual('object')
        for (var record of data) {
          expect(Object.keys(record)).toEqual([ 'id', 'title', 'release_date', 'synopsis' ])
        }
        done()
      })
    })
  })

  describe('.sort', function(done) {
    it('returns a successful response', function(done) {
      request.get(url("/sort/title?n=1&p=2"), function(error, response, body) {
        expect(response.statusCode).toBe(200)
        done()
      })
    })

    it("returns JSON", function(done) {
      request.get(url("/sort/title?n=1&p=2"), function(error, response, body) {
        expect(response.headers['content-type']).toContain('application/json')
        done()
      })
    })

    it("should be an array of objects", function(done) {
      request.get(url("/sort/title?n=1&p=2"), function(error, response, body) {
        var data = JSON.parse(body)
        expect(typeof data).toEqual('object')

        for (var record of data) {
          expect(Object.keys(record)).toEqual([ 'id', 'title', 'release_date', 'synopsis' ])
        }
        done()
      })
    })
  })

  describe('.find', function(done) {
    it('returns a successful response', function(done) {
      request.get(url("/psycho/current"), function(error, response, body) {
        expect(response.statusCode).toBe(200)
        done()
      })
    })

    it("returns JSON", function(done) {
      request.get(url("/psycho/current"), function(error, response, body) {
        expect(response.headers['content-type']).toContain('application/json')
        done()
      })
    })

    it("should be an array of objects", function(done) {
      request.get(url("/psycho/current"), function(error, response, body) {
        var data = JSON.parse(body)
        expect(typeof data).toEqual('object')

        for (var record of data) {
          expect(Object.keys(record)).toEqual([ 'id', 'title', 'release_date', 'synopsis' ])
        }
        done()
      })
    })
  })

  describe('.history', function(done) {
    it('returns a successful response', function(done) {
      request.get(url("/psycho/history/sort/name"), function(error, response, body) {
        expect(response.statusCode).toBe(200)
        done()
      })
    })

    it("returns JSON", function(done) {
      request.get(url("/Psycho/history/sort/name"), function(error, response, body) {
        expect(response.headers['content-type']).toContain('application/json')
        done()
      })
    })

    it("should be an array of objects", function(done) {
      request.get(url("/Psycho/history/sort/name"), function(error, response, body) {
        var data = JSON.parse(body)
        expect(typeof data).toEqual('object')

        for (var record of data) {
          expect(Object.keys(record)).toEqual(['id', 'name', 'registered_at', 'address', 'city', 'state', 'postal_code', 'phone', 'account_credit'])
        }
        done()
      })
    })
  })
  
})
