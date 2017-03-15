<?php
require_once('./vendor/autoload.php');
use PHPUnit\Framework\TestCase;
use GuzzleHttp\Client;

// Usage:  php vendor/bin/phpunit test/test.php

class APITest extends TestCase{
  protected $client;

  protected function setUp() {
    $this->client = new GuzzleHttp\Client();
  }

  // us.ypseek.com/labs/2017/gigster/interface/index.php?controller=auth&action=login
  public function testLogin() {
    $url = 'http://us.ypseek.com/labs/2017/gigster/interface/index.php?controller=auth&action=login';
    $response = $this->client->request('POST', $url, [
      'form_params' => [
        'email' => 'admin@gigster.com',
        'password' => 'abc123456'
      ]
    ]);
    //
    $this->assertEquals(200, $response->getStatusCode());
    $response = json_decode($response->getBody(), true);
    $this->assertArrayHasKey('data', $response);
    $this->assertEquals(0, $response['code']);
    $this->assertEquals(true, $response['data']['isLogin']);
  }

  // NOTICE: you may need to use fresh token to test because it will expire within 1 hour.
  public function testGetAdminExpense(){
    $url = 'http://us.ypseek.com/labs/2017/gigster/interface/index.php?controller=expense&action=get_by_admin';
    $response = $this->client->request('GET', $url, [
      'headers' => [
        'Authorization' => 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC91cy55cHNlZWsuY29tXC8iLCJhdWQiOiJodHRwOlwvXC91cy55cHNlZWsuY29tIiwiaWF0IjoxNDg5NTQ5Mjc5LCJuYmYiOjE0ODk1NDkyNzksImV4cCI6MTQ4OTU1Mjg3OSwidWlkIjozfQ.uCCdePbrSLPoy2x0OkclmZxLUxwVwCcdTuGNozJhVRg',
      ]
    ]);
    //
    $this->assertEquals(200, $response->getStatusCode());
    $response = json_decode($response->getBody(), true);
    $this->assertArrayHasKey('data', $response);
    $this->assertEquals(0, $response['code']);
    $this->assertInternalType('array', $response['data']);
  }

}