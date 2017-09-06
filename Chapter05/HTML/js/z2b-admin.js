/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// z2c-admin.js

var creds;
var connection;
var connectionProfileName = "z2b-test-profile";
var networkFile = "zerotoblockchain-network.bna"
var businessNetwork = "zerotoblockchain-network";

/**
 * load the administration User Experience
 */
function loadAdminUX ()
{
  toLoad = "admin.html";
  $.when($.get(toLoad)).done(function (page)
    {$("#body").empty();
    $("#body").append(page);
  });
}

/**
 * list the available business networks
 */
function adminList()
{

}

/**
 * load the entry form for a connection profile
 */
function displayProfileForm ()
{

}

/**
 * get the data from the network connection form.
 */
function getConnectForm ()
{

}

/**
 * test creating a network connection
 */
function createConnection (_form)
{

}

/**
 * get all network connection profiles
 */
function getProfiles()
{

}

/**
 * gather and list all of the current network connection profiles
 */
function listProfiles(_state)
{

}

/**
 * deploy a new network
 */
function networkDeploy()
{

}

/**
 * delete a connection profile
 * @param {String} _name - a string containing the name of the network connection profile to be deleted
 */
function deleteConnectionProfile(_name)
{

}

/**
 * ping a network, check for compatibility
 */
function ping()
{

}

/**
 * take down a business network
 */
function networkUndeploy()
{

}

/**
 * update an existing network
 */
function networkUpdate()
{

}

/*
* display a network profile
*/
function displayProfile(_profile, _name)
{
  var _str = "";
  _str += "<h4>"+_name+"</h4>";
   _str +="<table>";
   for (item in _profile)
    {(function(_item, _obj){
      switch (_item)
      {
        case 'orderers':
          for (subItem in _obj[_item])
            {(function(_subItem, __obj)
              {_str+="<tr><td>"+_item+"</td><td>url</td><td>"+__obj[_subItem].url+"</td></tr>";
              })(subItem, _obj[_item]);
            }
        break;
        case 'peers':
          for (subItem in _obj[_item])
            {(function(_subItem, __obj)
              {_str+="<tr><td>"+_item+"</td><td>eventURL</td><td>"+__obj[_subItem].eventURL+"</td></tr>";
              _str+="<tr><td>"+_item+"</td><td>requestURL</td><td>"+__obj[_subItem].requestURL+"</td></tr>";
            })(subItem, _obj[_item]);
            }
        break;
        case 'ca':
          for (subItem in _obj[_item])
            {(function(_subItem, __obj)
              {_str+="<tr><td>"+_item+"</td><td>"+_subItem+"</td><td>"+__obj[_subItem]+"</td></tr>";
            })(subItem, _obj[_item]);
            }
        break;
        default:
        _str+="<tr><td>"+_item+"</td><td>"+_obj[_item]+"</td></tr>";
      }
    })(item, _profile)
  }
   _str +="</table>";
   return _str;
}
