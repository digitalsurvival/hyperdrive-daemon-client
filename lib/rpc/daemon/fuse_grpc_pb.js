// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var daemon_fuse_pb = require('../daemon/fuse_pb.js');
var daemon_common_pb = require('../daemon/common_pb.js');

function serialize_FuseStatusRequest(arg) {
  if (!(arg instanceof daemon_fuse_pb.FuseStatusRequest)) {
    throw new Error('Expected argument of type FuseStatusRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_FuseStatusRequest(buffer_arg) {
  return daemon_fuse_pb.FuseStatusRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_FuseStatusResponse(arg) {
  if (!(arg instanceof daemon_fuse_pb.FuseStatusResponse)) {
    throw new Error('Expected argument of type FuseStatusResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_FuseStatusResponse(buffer_arg) {
  return daemon_fuse_pb.FuseStatusResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MountRequest(arg) {
  if (!(arg instanceof daemon_fuse_pb.MountRequest)) {
    throw new Error('Expected argument of type MountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MountRequest(buffer_arg) {
  return daemon_fuse_pb.MountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_MountResponse(arg) {
  if (!(arg instanceof daemon_fuse_pb.MountResponse)) {
    throw new Error('Expected argument of type MountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_MountResponse(buffer_arg) {
  return daemon_fuse_pb.MountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UnmountRequest(arg) {
  if (!(arg instanceof daemon_fuse_pb.UnmountRequest)) {
    throw new Error('Expected argument of type UnmountRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UnmountRequest(buffer_arg) {
  return daemon_fuse_pb.UnmountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UnmountResponse(arg) {
  if (!(arg instanceof daemon_fuse_pb.UnmountResponse)) {
    throw new Error('Expected argument of type UnmountResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UnmountResponse(buffer_arg) {
  return daemon_fuse_pb.UnmountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FuseService = exports.FuseService = {
  status: {
    path: '/Fuse/status',
    requestStream: false,
    responseStream: false,
    requestType: daemon_fuse_pb.FuseStatusRequest,
    responseType: daemon_fuse_pb.FuseStatusResponse,
    requestSerialize: serialize_FuseStatusRequest,
    requestDeserialize: deserialize_FuseStatusRequest,
    responseSerialize: serialize_FuseStatusResponse,
    responseDeserialize: deserialize_FuseStatusResponse,
  },
  mount: {
    path: '/Fuse/mount',
    requestStream: false,
    responseStream: false,
    requestType: daemon_fuse_pb.MountRequest,
    responseType: daemon_fuse_pb.MountResponse,
    requestSerialize: serialize_MountRequest,
    requestDeserialize: deserialize_MountRequest,
    responseSerialize: serialize_MountResponse,
    responseDeserialize: deserialize_MountResponse,
  },
  unmount: {
    path: '/Fuse/unmount',
    requestStream: false,
    responseStream: false,
    requestType: daemon_fuse_pb.UnmountRequest,
    responseType: daemon_fuse_pb.UnmountResponse,
    requestSerialize: serialize_UnmountRequest,
    requestDeserialize: deserialize_UnmountRequest,
    responseSerialize: serialize_UnmountResponse,
    responseDeserialize: deserialize_UnmountResponse,
  },
};

exports.FuseClient = grpc.makeGenericClientConstructor(FuseService);