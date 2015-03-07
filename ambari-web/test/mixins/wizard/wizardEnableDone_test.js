/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var App = require('app');

describe('App.WizardEnableDone', function () {
  var baseObject = Em.Object.extend({
        statusChangeCallback: function (data) {
          isSubmitDisabled: true
        }
      }),
      mixedObject = baseObject.extend(App.WizardEnableDone);
  beforeEach(function () {
    mixedObjectInstance = mixedObject.create({
      tasks: [{id: 77, status: 'FAILED'}],
      currentTaskId: 77
    });
  });

  it('#statusChangeCallback should enable done/complete button', function () {
    mixedObjectInstance.statusChangeCallback();
    expect(mixedObjectInstance.isSubmitDisabled).to.be.false;
  });
});